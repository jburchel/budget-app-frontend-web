const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary-700 to-primary-500 text-white rounded-lg mb-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Take Control of Your Finances
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            The Budget Envelope App helps you manage your money, track expenses, and reach your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/register"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-primary-700 font-medium shadow-sm hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white text-white font-medium hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Why Choose the Budget Envelope App?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 5H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                <path d="M5 5V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Envelope Budgeting</h3>
            <p className="text-gray-600">
              Use the tried-and-true envelope method to allocate your income to different spending categories.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Expense Tracking</h3>
            <p className="text-gray-600">
              Easily record and categorize your expenses to see where your money is going.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Financial Goals</h3>
            <p className="text-gray-600">
              Set and track your financial goals to stay motivated and make progress.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;