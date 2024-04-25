import { expect } from 'chai';
import { contactCreate, getAllContact, getContactById, updateContactById, deleteContactById } from '../controller/contactController.js';
import Contact from '../model/contactModel.js';
import validator from "validator";

describe('Contact Controller Tests', () => {
  describe('POST /', () => {
    it('should create a new contact message', async () => {
    });
  });

  describe('GET /', () => {
    it('should get all contact messages', async () => {
    });
  });

  describe('GET /:id', () => {
    it('should get a contact message by ID', async () => {
    });
  });

  describe('PUT /:id', () => {
    it('should update a contact message by ID', async () => {
    });
  });

  describe('DELETE /:id', () => {
    it('should delete a contact message by ID', async () => {
    });
  });
});
