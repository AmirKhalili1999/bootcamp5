import {Injectable} from "@angular/core";
import * as moment from 'jalali-moment';
import * as momentMain from 'moment';

@Injectable({
  providedIn: 'root'
})

export class GlobalVariableService {
  EMAIL_REGEX = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
  PHONE_REGEX = '(\\+98|0)?9\\d{9}';
  PHONE_INPUT_REGEX = '^[0]{1}[0-9]{0,10}$';
  OTP_INPUT_REGEX = '^[0-9]{0,4}$';
  NUMBER_REGEX = '^[0-9]+$';
  AMOUNT_REGEX = '^[1-9]{1}[0-9]{0,14}$';
  PERCENTAGE_REGEX = '^[1-9][0-9]?$|^100$';
  TIME_REGEX = '^([0-1]?[0-9]|2[0-3])(?::([0]{0,2}))?$';
  PASSWORD_REGEX = '^.{4,25}$';
  USER_NAME_REGEX = '^[a-z0-9_-]+$';
  ENGLISH_REGEX = '^[a-zA-Z\\s]+$';
  PERSIAN_REGEX = '^[ا-یءئأإ\\s]+$';
  // @ts-ignore
  branch = import.meta.env.NG_APP_ENABLE_ANALYTICS;
  VERSION = "0.0.1";
  API_URL = process.env.NG_APP_API_URL;
  STORAGE_URL = process.env.NG_APP_API_URL_STORAGE;

  admin: string = this.API_URL + `manage/admin`;
  gallery: string = this.API_URL + `manage/gallery`;
  bootcamp: string = this.API_URL + `manage/bootcamp`;
  service: string = this.API_URL + `manage/service`;
  corses: string = this.API_URL + `manage/corses`;
  project: string = this.API_URL + `manage/project`;
  user: string = this.API_URL + `manage/user`;
  filtertby: string = this.API_URL + `manage/filtertby`;
  teacher: string = this.API_URL + `manage/teacher`;
  storage: any = this.STORAGE_URL;
  graduated: string = this.API_URL + `manage/graduated`;
  question: string = this.API_URL + `manage/questions`;
  blog: string = this.API_URL + `manage/blog`;
  blogCategories: string = this.API_URL + `manage/blogCategory`;
  blogTest: string = this.API_URL + `manage/blog`;
  InstituteUsers: string = this.API_URL + `manage/InstituteUsers`;
  webInstituteUsers: string = this.API_URL + `web/InstituteUsers`;
  manageInstituteUsers: string = this.API_URL + `manage/InstituteUsers`;
  manageContactUs: string = this.API_URL + `manage/contactUs`;
  payment: string = this.API_URL + `manage/payment`;
  aboutUs: string = this.API_URL + `manage/aboutUs`;

  constructor() {
  }

  convertDate(value: any, toLang: 'fa' | 'en', format: 'YYYY-MM-DD' | 'jYYYY-jMM-jDD' | 'YYYY/MM/DD' | 'jYYYY/jMM/jDD' | 'HH:mm' | 'jYYYY' = 'YYYY-MM-DD') {
    if (!value) {
      return;
    }
    if (toLang == 'fa') {
      // return moment(value, 'YYYY-MM-DD').format('jYYYY-jMM-jDD');
      return moment(value, momentMain(value).creationData().format).format(format);
    } else if (toLang == 'en') {
      // return moment(value, 'jYYYY-jMM-jDD').format('YYYY-MM-DD');
      // @ts-ignore
      const currentFormat = (momentMain(value).creationData().format).toString().replace('YYYY', 'jYYYY').replace('MM', 'jMM').replace('DD', 'jDD');
      return moment(value, currentFormat).format(format);
    }
  }

  resizeImage = (file: any, limit = 1900) => (
    new window.Promise(resolve => {
      const img = new Image()
      img.src = URL.createObjectURL(file)

      img.onload = () => {
        const canvas = document.createElement("canvas")

        if (img.width > limit) {
          const aspectRatio = img.height / img.width

          canvas.width = limit
          canvas.height = (limit * aspectRatio)
        } else {
          canvas.width = img.width
          canvas.height = img.height
        }

        let ctx = canvas.getContext("2d");

        // @ts-ignore
        ctx.fillStyle = "#ffffff"
        // @ts-ignore
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // @ts-ignore
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height)

        canvas.toBlob((blob) => {
          resolve({
            // @ts-ignore
            url: URL.createObjectURL(blob),
            blob,
            type: "image/jpeg"
          })
        }, "image/jpeg")
      }
    })
  )
}
