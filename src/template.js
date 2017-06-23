export default body => initialState => `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <link rel="stylesheet" href="/semantic.min.css"></link>
            <div id="app" style="height:'100%'">${body}</div>
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src="/bundle.js"></script>
        </body>
    </html>
`