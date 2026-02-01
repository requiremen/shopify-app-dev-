# Shopify Post-Purchase App

This is a Shopify App built with Node.js and React that allows merchants to configure a custom message displayed on the post-purchase page.

## 🚀 Features

*   **Admin Dashboard**: A simple UI where merchants can input and save a custom post-purchase message.
*   **Database Integration**: Uses MongoDB to securely store the merchant's configuration (shop domain and custom message).
*   **Post-Purchase Extension**: A checkout extension intended to display the saved message to customers after they complete a purchase.

## 🛠️ Tech Stack

*   **Backend**: Node.js, Express
*   **Frontend**: React, Shopify Polaris
*   **Database**: MongoDB
*   **Tools**: Shopify CLI, Vite

## ⚠️ Current Limitations

**Note regarding Metafields & Extension Connectivity:**

While the Admin Dashboard successfully saves the message to the MongoDB database, the connection between the backend data and the Post-Purchase UI extension is currently **hardcoded**.

I am still learning how to effectively use Shopify **Metafields** to pass dynamic data from the app backend to the checkout extension. As a result, the extension currently displays static content instead of the message saved in the database.

Future improvements will include:
1.  Fetching the saved message from MongoDB.
2.  Storing it in a Shop or Order Metafield.
3.  Retrieving that Metafield within the `ShouldRender` and `Render` extension points to make the UI truly dynamic.

## 📦 Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create an `.env` file in the `app/` directory and add your MongoDB connection string:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    ```

4.  **Run the app**:
    ```bash
    npm run dev
    ```

## 📝 License

This project is for educational purposes.
