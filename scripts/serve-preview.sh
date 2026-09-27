#!/usr/bin/env bash
set -euo pipefail
cd /workspace
# kill prior
pkill -f "next start --hostname 0.0.0.0" 2>/dev/null || true
pkill -f "socat.*43127" 2>/dev/null || true
pkill -f "node scripts/proxy-43127" 2>/dev/null || true
sleep 1

# Primary: Next on 3000 (IDE auto-forward favorite)
npm run start:preview &
NEXT_PID=$!

# Wait for 3000
for i in $(seq 1 40); do
  if curl -sf -o /dev/null http://127.0.0.1:3000/; then break; fi
  sleep 0.25
done

# Also expose 43127 -> 3000 for existing Preview tabs
node /workspace/scripts/proxy-port.mjs 43127 3000 &
PROXY_PID=$!

echo "next_pid=$NEXT_PID proxy_pid=$PROXY_PID"
wait -n || true
wait
