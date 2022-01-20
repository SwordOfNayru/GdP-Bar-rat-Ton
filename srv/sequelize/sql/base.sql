CREATE TABLE bar (
    id integer CONSTRAINT pk_bar PRIMARY KEY,
    horaires JSONB NOT NULL,
    nom VARCHAR(255) NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    coordN DECIMAL NOT NULL,
    coordS DECIMAL NOT NULL,
    img VARCHAR(255) NOT NULL,
)