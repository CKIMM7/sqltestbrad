
INSERT INTO owners (name, address) 
VALUES
    ('Beth', 'South Pavillion' ),
    ('Naz', '1 The Strand' );

INSERT INTO dogs (name, age, owner_id) 
VALUES
    ('Snoopy', 5, null ),
    ('Mochi', 3, 2 ),
    ('Masha', 5, null ),
    ('Hendon', 2, 2 ),
    ('Zola', 13, 1 ),
    ('Snip', 3, null);

INSERT INTO weather (temperature, describe) 
VALUES
    (10, 'COLD' ),
    (20, 'HOT' );
