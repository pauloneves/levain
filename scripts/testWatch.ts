const watcher = Deno.watchFs('./src')

runTest()

for await (const event of watcher) {
    // console.log('>>>> event', event);
    if (['create', 'modify'].indexOf(event.kind)) {
        event.paths.forEach((file) => {
            if (file.endsWith('.ts') && (!file.match('\$deno\$'))) {
                runTest(file)
            }
        })
    }
}

async function runTest(file?: string): Promise<void> {
    let cmd = ['deno', 'test', '--unstable', '--allow-env'];
    const testFile =
        file?.replace(/(?:.test)?.ts$/, '.test.ts')
        || 'all tests'

    if (file) {
        cmd.push(testFile)
    }
    console.log('RUNTEST', testFile, cmd)
    await Deno.run({cmd})
}