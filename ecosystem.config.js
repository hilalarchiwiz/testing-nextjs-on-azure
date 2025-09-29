module.exports = {
    apps: [
        {
            name: "testing app azure",
            script: "node_modules/next/dist/bin/next",
            agrs: "start -p 8080",
            env: {
                PORT: process.env.PORT || 8080,
            },
            watch: false,
            autorestart: true,
        }
    ]
}
