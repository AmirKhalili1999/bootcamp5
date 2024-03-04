import {Injectable} from "@angular/core";
import {GlobalVariableService} from "./global-variable.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private gvs: GlobalVariableService,
    private http: HttpClient
  ) {
  }

  // admins  -----------------------------------------------------------------------
  getAdmins() {
    return this.http.get(`${this.gvs.admin}/list`);
  }

  searchAdmin(body: any) {
    return this.http.post(`${this.gvs.admin}/search`, body);
  }

  createAdmin(body: any) {
    return this.http.post(`${this.gvs.admin}/register`, body);
  }

  getAdmin(id: any) {
    return this.http.get(`${this.gvs.admin}/get/${id}`);
  }

  updateAdmin(id: any, body: any) {
    return this.http.put(`${this.gvs.admin}/update/${id}`, body);
  }


  deleteAdmin(id: any) {
    return this.http.delete(`${this.gvs.admin}/delete/${id}`);
  }

  login(body: any) {
    return this.http.post(`${this.gvs.admin}/login`, body);
  }

  // teacher  -----------------------------------------------------------------------
  getTeachers() {
    return this.http.get(`${this.gvs.teacher}/list`);
  }

  searchTeacher(body: any) {
    return this.http.post(`${this.gvs.teacher}/search`, body);
  }

  creatTeacher(body: any) {
    return this.http.post(`${this.gvs.teacher}/post`, body);
  }

  getTeacher(id: any) {
    return this.http.get(`${this.gvs.teacher}/get/${id}`);
  }

  updateTeacher(id: any, body: any) {
    return this.http.put(`${this.gvs.teacher}/put/${id}`, body);
  }

  deleteTeacher(id: any) {
    return this.http.delete(`${this.gvs.teacher}/delete/${id}`);
  }

  // Users  -----------------------------------------------------------------------
  getUsers() {
    return this.http.get(`${this.gvs.user}/list`);
  }

  getUser(id: any) {
    return this.http.get(`${this.gvs.user}/bootcamp/get/${id}`);
  }

  addUsers(body: any) {
    return this.http.post(`${this.gvs.user}/post`, body);
  }

  editUser(id: any, body: any) {
    return this.http.put(`${this.gvs.user}/put/${id}`, body);
  }


  deleteUser(id: any) {
    return this.http.delete(`${this.gvs.user}/delete/${id}`);
  }

  filterUser(from: any, status: any) {
    if (from && !status) {
      return this.http.get(`${this.gvs.filtertby}?from=${from}`);
    }
    if (status && !from) {
      return this.http.get(`${this.gvs.filtertby}?status=${status}`);
    }
    if (from && status) {
      return this.http.get(`${this.gvs.filtertby}?from=${from}&status=${status}`);
    }
    if (!from && !status) {
      return this.http.get(`${this.gvs.user}/list`);
    }
    return this.http.get(`${this.gvs.user}/list`);
  }

  // storage  -----------------------------------------------------------------------
  postImage(body: any) {
    return this.http.post(`${this.gvs.storage}image`, body);
  }

  // Payment  -----------------------------------------------------------------------
  addPayment(id: any, body: any) {
    return this.http.post(`${this.gvs.API_URL}manage/payment/post/${id}`, body);
  }

  search(key: any) {
    return this.http.get(`${this.gvs.API_URL}manage/user/search/get/${key}`);
  }

  // bootcamp  -----------------------------------------------------------------------
  getBootcamps() {
    return this.http.get(`${this.gvs.bootcamp}/list`);
  }

  getBootcamp(id: any) {
    return this.http.get(`${this.gvs.bootcamp}/get/${id}`);
  }

  createBootcamp(body: any) {
    return this.http.post(`${this.gvs.bootcamp}/post`, body);
  }

  updateBootcamp(id: any, body: any) {
    return this.http.put(`${this.gvs.bootcamp}/put/${id}`, body);
  }

  deleteBootcamp(id: any) {
    return this.http.delete(`${this.gvs.bootcamp}/delete/${id}`);
  }

  // gallery------------------------------------------------------------
  getGalleries() {
    return this.http.get(`${this.gvs.gallery}/get`);
  }

  getGallery(id: any) {
    return this.http.get(`${this.gvs.gallery}/get/${id}`);
  }

  deleteGallery(id: any) {
    return this.http.delete(`${this.gvs.gallery}/delete/${id}`);
  }

  updateGallery(id: any, body: any) {
    return this.http.put(`${this.gvs.gallery}/update/${id}`, body);
  }

  createGallery(body: any) {
    return this.http.post(`${this.gvs.gallery}/post`, body);
  }

  // graduated-------------------------------------------------------
  getGraduateded(bootcampId: any) {
    if (bootcampId && bootcampId != '')
      return this.http.get(`${this.gvs.graduated}/get?id=${bootcampId}`);
    else
      return this.http.get(`${this.gvs.graduated}/get`);
  }

  getGraduated(id: any) {
    return this.http.get(`${this.gvs.graduated}/get/${id}`);
  }

  createGraduated(body: any) {
    return this.http.post(`${this.gvs.graduated}/post`, body);
  }

  createGraduatedCertificated(id: any, body: any) {
    return this.http.post(`${this.gvs.graduated}/post/Certificate/${id}`, body);
  }

  updateGraduated(id: any, body: any) {
    return this.http.put(`${this.gvs.graduated}/put/${id}`, body);
  }

  deleteGraduated(id: any) {
    return this.http.delete(`${this.gvs.graduated}/delete/${id}`);
  }

  // question-----------------------------------------------------------
  getQuestions() {
    return this.http.get(`${this.gvs.question}/list`);
  }

  getQuestion(id: any) {
    return this.http.get(`${this.gvs.question}/get/${id}`);
  }

  createQuestion(body: any) {
    return this.http.post(`${this.gvs.question}/post`, body);
  }

  updateQuestion(id: any, body: any) {
    return this.http.put(`${this.gvs.question}/update/${id}`, body);
  }

  deleteQuestion(id: any) {
    return this.http.delete(`${this.gvs.question}/delete/${id}`);
  }

  // blog -------------------------------------------------------------------------------
  getBlogs() {
    return this.http.get(`${this.gvs.blog}/list`);
  }

  getBlog(id: any) {
    return this.http.get(`${this.gvs.blog}/get/${id}`);
  }

  createBlog(body: any) {
    return this.http.post(`${this.gvs.blog}/post`, body);
  }

  updateBlog(id: any, body: any) {
    return this.http.put(`${this.gvs.blog}/put/${id}`, body);
  }

  deleteBlog(id: any) {
    return this.http.delete(`${this.gvs.blog}/delete/${id}`);
  }

  // Blog Categories -------------------------------------------------------------------------------
  getBlogCategories() {
    return this.http.get(`${this.gvs.blogCategories}/list`);
  }

  createBlogCategory(body: any) {
    return this.http.post(`${this.gvs.blogCategories}/post`, body);
  }

  // Blog Test -------------------------------------------------------------------------------
  getBlogsTestList() {
    return this.http.get(`${this.gvs.blogTest}/list`);
  }

  getBlogTest(id: any) {
    return this.http.get(`${this.gvs.blogTest}/get/${id}`);
  }

  createBlogTest(body: any) {
    return this.http.post(`${this.gvs.blogTest}/post`, body);
  }

  updateBlogTest(id: any, body: any) {
    return this.http.put(`${this.gvs.blogTest}/put/${id}`, body);
  }

  deleteBlogTest(id: any) {
    return this.http.delete(`${this.gvs.blogTest}/delete/${id}`);
  }

  // Blog Test -------------------------------------------------------------------------------
  getInstituteUsersList(skip: any, limit: any) {
    return this.http.get(`${this.gvs.InstituteUsers}/list?skip=${skip}&limit=${limit}`);
  }

  getInstituteUserById(id: any) {
    return this.http.get(`${this.gvs.InstituteUsers}/${id}`);
  }

  editInstituteUser(id: any, body: any) {
    return this.http.put(`${this.gvs.InstituteUsers}/${id}`, body);
  }

  // webInstituteUsers -------------------------------------------------------------------------------
  registerUser(body: any) {
    return this.http.post(`${this.gvs.webInstituteUsers}`, body);
  }

  getUni(id: any) {
    return this.http.get(`${this.gvs.manageInstituteUsers}/${id}`);
  }

  putUni(id: any, body: any) {
    return this.http.put(`${this.gvs.manageInstituteUsers}/${id}`, body);
  }

  deleteInstituteUser(id: any) {
    return this.http.delete(`${this.gvs.InstituteUsers}/${id}`);
  }

  // manageContactUs -------------------------------------------------------------------------------
  createNew(body: any) {
    return this.http.post(`${this.gvs.manageContactUs}`, body);
  }

  getContactinfo(id: any) {
    return this.http.get(`${this.gvs.manageContactUs}/${id}`);
  }

  editContact(id: any, body: any) {
    return this.http.put(`${this.gvs.manageContactUs}/${id}`, body);
  }

  deleteContact(id: any) {
    return this.http.delete(`${this.gvs.manageContactUs}/${id}`);
  }

  GetContactList(isVerify: any) {
    return this.http.get(`${this.gvs.manageContactUs}/isVerify=${isVerify}`);
  }

  // payment -------------------------------------------------------------------------------
  addAPayment(body: any, id: any) {
    return this.http.post(`${this.gvs.payment}/post/${id}`, body);
  }

  getDetailPayment(id: any) {
    return this.http.get(`${this.gvs.payment}/user/${id}`);
  }

  PaymentList(status: any, skip: any, limit: any) {
    return this.http.get(`${this.gvs.payment}?status =${status}&skip =${skip}&limit  =${limit}`);
  }

  // payment -------------------------------------------------------------------------------
  getAboutUs() {
    return this.http.get(`${this.gvs.aboutUs}`);
  }

  putAboutUs(id: any, body: any) {
    return this.http.put(`${this.gvs.aboutUs}/${id}`, body);
  }
}
