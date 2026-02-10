module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        // Type obligatoire (feat, fix, etc.)
        "type-empty": [2, "never"],

        // Scope obligatoire, mais libre
        "scope-empty": [2, "never"],

        // Sujet obligatoire
        "subject-empty": [2, "never"],

        // Longueur maximale du header
        "header-max-length": [2, "always", 100],
    },
};
