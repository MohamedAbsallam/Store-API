-- Create Orders Table
CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    status VARCHAR(15) NOT NULL,
    user_id BIGINT REFERENCES users(id)
);