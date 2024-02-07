import { apiClient } from '../main.js';

export default {
  async createJob(jobData) {
    return await apiClient.post(`/jobs`, jobData);
  },
  async getJobs(offset, limit) {
    return await apiClient.get(`/jobs?offset=${offset}&limit=${limit}`);
  },
  async getJobDetails(jobId) {
    return await apiClient.get(`/jobs/${jobId}`);
  },
  async deleteJob(jobId) {
    return await apiClient.delete(`/jobs/${jobId}`);
  },
  async getApplications() {
    return await apiClient.get(`/jobs/applications`);
  }
};
