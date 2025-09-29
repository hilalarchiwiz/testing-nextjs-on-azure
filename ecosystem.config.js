module.exports = {
    apps: [
        {
            name: "testing app azure",
            script: "node_nodules/next/dist/bin/next",
            agrs: "start",
            env: {
                PORT: process.env.PORT || 3000,
            },
            watch: false,
            autorestart: true,
        }
    ]
}