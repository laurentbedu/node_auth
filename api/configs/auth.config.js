const config = {
    HASH_PREFIX: "$2b$08$",
    JWT_SECRET: "b3715d5693ef63a7f77454f671a3270a",
    RESTRICTED_ROUTES : {
        "/test/user": (user) => user.role === 1,
        "/test/admin": (user) => user.role === 2,
        "/test/account/*": (user, params) =>  user.role > 0 && user.id == params.id,
    }
}

module.exports = config;