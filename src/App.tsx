// Supertokens Import
import SuperTokens from 'supertokens-auth-react';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import Session from 'supertokens-auth-react/recipe/session';
import { AlertsProvider } from './Contexts/AlertsContext';
import Router from './AppRouter';

// Supertokens setup
SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
    appName: "Ahmed Camera",
    apiDomain: "http://localhost:3030",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    EmailPassword.init({
      palette: {
        primary: '#2da8ff'
      },
      style: {
        container: {
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
        }
      },
      signInAndUpFeature: {
        signUpForm: {
          formFields: [{
            id: "name",
            label: "Full Name",
            placeholder: "First name and last name"
          }]
        }
      },
      emailVerificationFeature: {
        mode: "REQUIRED"
      },
      getRedirectionURL: async (context) => {
        if (context.action === "SUCCESS") {
          if (context.redirectToPath !== undefined) {
            // we are navigating back to where the user was before they authenticated
            return context.redirectToPath;
          }
          return "/account";
        }
        return undefined;
      }
    }),
    Session.init()
  ]
});

function App() {
  return (
    <div className="App">
      <AlertsProvider>
        <Router />
      </AlertsProvider>
    </div>
  );
}

export default App;
