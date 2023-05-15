USE userDB;

CREATE TABLE users (username VARCHAR(20), password VARCHAR(20), authAppSecret VARCHAR(50), active2FA BOOLEAN);

INSERT INTO users VALUES ('admin', 'admin', 'DMPNCH6JHORRP5UAKNYHULK7DRM6HYCP', true);