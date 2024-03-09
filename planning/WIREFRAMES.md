  ______________________________
 |`Buy n Sell Repo | Wireframes`|
 |______________________________|
# 1. Main Feed / Featured Items(get/items/featured)

* Route: associated with viewing main feed / featured items
* Nav: Links to the Home Page, Categories, Account, Favorites, and potentially login/register
* Content: Display of featured items with the following: Image, Title, Price, Favorite button 
* Form Fields: None, maybe a search function
* Form Submission: if a search function would submit to /item?query
_________________________________________________________________________________________________________________________________________________________________________

# 2. Item Listing (get /items and get /items?price min max)
* Route: Listing all items / filtered by price
* Nav: Listing all items / filtered by price
* Content: List/grid of items, filters for price range, categories
* Form Fields: Filters for price, categories
* Form Submission: Filters submit to /items with query parameters
_________________________________________________________________________________________________________________________________________________________________________

# 3. Item Details (get /items/id)
* Route: Viewing the details of an item
* Nav: go back to listings, add to favorites, message seller
* Content: Item Info; photos, description, price, seller info + message form to message seller (similar to kijiji)
* Form Fields: subject + body for message form
* Form Submission: should submit to /messages
_________________________________________________________________________________________________________________________________________________________________________

# 4. User Favorites (get users/userID/favorites)
* Route: Viewing a users favorite items
* Nav: Same as other pages
* Content: List of fav items
* Form Fields:Option to remove from favorites
* Form Submission: Removal of favotires (Delete request)
_________________________________________________________________________________________________________________________________________________________________________

# 5. Login Page (get /login)
* Route: Accessing the login info
* Nav: Sign up, Home, Browse items
* Content: Login Form
* Form Fields: Email + password
* Form Submission: Form submit to /login
_________________________________________________________________________________________________________________________________________________________________________

# 6. Registration Page (if needed)
* Route: Accessing the reg form
* Nav: Login, Home, Browse Items
* Content: Reg Form
* Form Fields: First name, Last name, Email + Password
* Form Submission: submit to /users
_________________________________________________________________________________________________________________________________________________________________________

# 7 Post New items (items/new) Admin
* Route: Form for posting new items
* Nav: Dashboard, Logout, Browse Items
* Content: Form to create a new item listing
* Form Fields: TItle, Description, Price, Photo, Category
* Form Submission: Form submit to /items
_________________________________________________________________________________________________________________________________________________________________________

# 8 Edit Item (Get items/id/edit)
* Route: Editing an existing item
* Nav: Dashboard, Logout, Item Details
* Content: Form should be filled with the details that already exist
* Form Fields: Title, Description, Price, Photos, Category
* Form Submission: Form submits to /items/id
_________________________________________________________________________________________________________________________________________________________________________

# 9 UI/User Page/Profile (Get users/userid)
* Route: Viewing users profile and actions
* Nav:  Edit Profile, Favorites, Messages, Posited Items, Logout
* Content: User info, links to pages
* Form Fields: Varies depending on the page
* Form Submission: None that I can think of
_________________________________________________________________________________________________________________________________________________________________________



