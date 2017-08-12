export default body => initialState => `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Loopcake</title>
            <link rel="stylesheet" type="text/css" href="/semantic.min.css">
        </head>
        <body>
           
            <div id="app" style="height:'100%'">${body}</div>
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src="/bundle.js"></script>
        </body>
    </html>
`
