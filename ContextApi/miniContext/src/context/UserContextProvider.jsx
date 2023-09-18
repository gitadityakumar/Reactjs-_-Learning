import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Add prop validation for the 'children' prop
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // You can also use PropTypes.element if you want to be more specific
};

export default UserContextProvider;
