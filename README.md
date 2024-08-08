# FinTrackr

![Fintrackr](image.png)

!Fintrackr

Welcome to **FinTrackr**, the ultimate portfolio management app for Indian stocks and mutual funds. We provide reliable, scalable, and customizable solutions for managing your investments. Whether you're tracking stock performance, managing mutual fund portfolios, or analyzing market trends, FinTrackr has got you covered.

## Features

- **Track Stock Performance**: Stay updated with real-time stock prices and performance metrics.
- **Manage Mutual Fund Portfolios**: Easily manage and analyze your mutual fund investments.
- **Market Analysis**: Get insights and trends from the market to make informed decisions.
- **Customizable Solutions**: Tailor the app to fit your specific investment needs.

## Tech Stack

FinTrackr is built using the following technologies:

- **Next.js with TypeScript**: For building a robust and scalable frontend.
- **ShadCN**: For beautiful and responsive UI components.
- **Prisma**: As the ORM for database management.
- **Supabase**: For backend services and database hosting.
- **Clerk**: For authentication and user management.
- **Google Finance API**: For fetching real-time financial data.

## Getting Started

To get started with FinTrackr, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/fintrackr.git
    ```

2. **Install dependencies**:
    ```bash
    cd fintrackr
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add your environment variables:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    CLERK_FRONTEND_API=your-clerk-frontend-api
    GOOGLE_FINANCE_API_KEY=your-google-finance-api-key
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```

5. **Open your browser**:
    Navigate to http://localhost:3000 to see the app in action.

## Contributing

We welcome contributions from the community! If you'd like to contribute, please fork the repository and create a pull request. For major changes, please open an issue first to discuss what you would like to change.

---

Thank you for using FinTrackr! Happy investing!
