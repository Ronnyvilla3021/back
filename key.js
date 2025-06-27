const config = {
    PORT: 3000,
    NODE_ENV: 'production',

    // MySQL
    MYSQL: {
        HOST: 'localhost',
        USER: 'root',
        PASSWORD: '',
        DATABASE: 'indiec_db'
    },

    // MongoDB
    MONGODB_URI: 'mongodb+srv://ravvilla:12345@cluster0.y0vrdvx.mongodb.net/',

    // JWT
    JWT: {
        SECRET: 'indiec_super_secret_jwt_key_2024',
        EXPIRES_IN: '24h'
    },

    // Encryption
    ENCRYPTION_KEY: 'indiec_32_char_encryption_key_123',

    // Upload
    UPLOAD: {
        PATH: './uploads',
        MAX_FILE_SIZE: 5242880
    },

    // Logging
    LOG_LEVEL: 'info'
};

module.exports = config;
