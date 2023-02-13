// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Review {
    // User information
    struct User {
        address userAddress;
        string review;
    }

    // Mapping to store all reviews
    mapping (address => User) public users;

    // Event to log a new review
    event NewReview(address userAddress, string review);

    // Function to add a new review
    function addReview(string memory _review) public {
        // Save the review to the mapping
        users[msg.sender].review = _review;

        // Emit an event with the new review
        emit NewReview(msg.sender, _review);
    }

    // Function to retrieve a review for a user
    function getReview(address _userAddress) public view returns (string memory) {
        return users[_userAddress].review;
    }
}
