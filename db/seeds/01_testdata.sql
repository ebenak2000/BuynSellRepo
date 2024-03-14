-- Users
INSERT INTO USERS (firstName, lastName, email, phone, password)
VALUES ('John', 'Doe', 'john.doe@example.com', '1234567890', 'password123'),
       ('Jane', 'Smith', 'jane.smith@example.com', '0987654321', 'letmein'),
       ('Alice', 'Johnson', 'alice.johnson@example.com', '5555555555', 'securepwd');

-- Product Types
INSERT INTO PRODUCTTYPE (typeName, description)
VALUES ('Electronics', 'Electronic devices and gadgets'),
       ('Clothing', 'Clothing items and accessories'),
       ('Books', 'Books of various genres');

-- Products
INSERT INTO PRODUCT (userID, typeID, title, description, price, status, img_url)
VALUES (1, 1, 'Smartphone', 'Brand new smartphone with advanced features', 999, true, 'https://i.imgur.com/Eln8TZJ.png'),
       (2, 2, 'T-shirt', 'Comfortable cotton t-shirt in assorted colors', 20, true, 'https://i.imgur.com/KGNXSYM.png'),
       (3, 3, 'Sci-fi Novel', 'Exciting science fiction novel by a renowned author', 15, true, 'https://i.imgur.com/bbSo5qb.png');

-- Featured Items
INSERT INTO FEATURED (itemID, dateListed)
VALUES (1, '2024-03-01'),
       (2, '2024-03-05');

-- Favorites
INSERT INTO FAVORITES (userID, itemID)
VALUES (1, 2),
       (2, 1),
       (3, 3);

-- Admin
INSERT INTO ADMIN (userID)
VALUES (1),
       (2);

-- Messages
INSERT INTO MESSAGE (senderID, receiverID, itemID, content, timeIndicator)
VALUES (1, 1, 2, 'I would like to purchase this item.', CURRENT_TIMESTAMP),
       (2, 1, 1, 'Could you provide more details about the smartphone?', CURRENT_TIMESTAMP),
       (3, 2, 3, 'Is this book available for purchase?', CURRENT_TIMESTAMP);

-- Sales
INSERT INTO SALES (itemID, sellerID, buyerID, price)
VALUES (1, 1, 2, 950),
       (3, 2, 3, 12);
