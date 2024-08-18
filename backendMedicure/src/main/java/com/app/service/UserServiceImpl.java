//package com.app.service;
//
//import com.app.entities.User;
//import com.app.repository.IUserRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class UserServiceImpl implements UserService {
//
//    @Autowired
//    private IUserRepo userRepository;
//
//    @Override
//    public User saveUser(User user) {
//        return userRepository.save(user);
//    }
//
//    @Override
//    public Optional<User> getUserById(Long id) {
//        return userRepository.findById(id);
//    }
//
//    @Override
//    public List<User> getAllUsers() {
//        return userRepository.findAll();
//    }
//
//    @Override
//    public void deleteUser(Long id) {
//        userRepository.deleteById(id);
//    }
//
//    @Override
//    public List<User> findUsersByFirstName(String firstName) {
//        return userRepository.findByFirstNameContainingIgnoreCase(firstName);
//    }
//
//    @Override
//    public List<User> findUsersByLastName(String lastName) {
//        return userRepository.findByLastNameContainingIgnoreCase(lastName);
//    }
//
//    @Override
//    public List<User> findUsersByEmail(String email) {
//        return userRepository.findByEmailContainingIgnoreCase(email);
//    }
//}
