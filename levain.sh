#!/bin/bash

clear

bin/deno run \
    --allow-read --allow-write --allow-env --allow-net --allow-run \
    --unstable \
    src/levain.ts \
    $@
