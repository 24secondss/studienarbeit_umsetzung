USE userDB;

CREATE TABLE users (username VARCHAR(20), password VARCHAR(20), authAppSecret VARCHAR(50), active2FA BOOLEAN);

INSERT INTO users VALUES ('admin', 'admin', 'none', false);