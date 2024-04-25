import { expect } from 'chai';
import { Register, Login, getAllUsers, getUserById, updateUserById, deleteUserById } from '../controller/auth.controller.js';
import User from '../model/authModels.js';

describe('Auth Controller Tests', () => {
    describe('POST /register', () => {
    it('should register a new user', async () => {
    });
  });

  describe('POST /login', () => {
    it('should login an existing user', async () => {
    });
  });

  describe('GET /users', () => {
    it('should get all users', async () => {
    });
  });

  describe('GET /users/:id', () => {
    it('should get a user by ID', async () => {
    });
  });

  describe('PUT /users/:id', () => {
      it('should update a user by ID', async () => {
      });
  });

  describe('DELETE /users/:id', () => {
    it('should delete a user by ID', async () => {
    });
  });
});
