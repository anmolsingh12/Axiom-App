import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataServiceProvider {

  boardData:any;
  url = 'http://acmaster.simplysaid.in/api/setup/';
  constructor(public http: Http) {
  }
  getBoard()
    {
      let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions();
      opts.headers = headers;
      let url = this.url+"board";
      return this.http.get(url, opts).map((response: Response) => response.json());
    }

  getClass()
  {
    let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions();
      opts.headers = headers;
      let url = this.url+"classes";
      return this.http.get(url, opts).map((response: Response) => response.json());
  }

  getSubjectByClass(classId:any)
  {
    let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions({ headers: headers});
      let url = 'http://acmaster.simplysaid.in/api/setupdetail/getSubjectsByClass/';
      return this.http.post(url, {class_id: classId, role_id: "2"}, opts ).map((response: Response) => response.json(), err => console.log(err));
  }

  getTopicByClassSubject(classId:any, subId:any)
  {
    let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions({ headers: headers});
      let url = 'http://acmaster.simplysaid.in/api/setupdetail/getTopicByBoardClassSubject';
      return this.http.post(url, { class_id: classId, sub_id: subId }, opts ).map((response: Response) => response.json(), err => console.log(err));
  }

  getSubtopicByTopic(topicId:any)
  {
    let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions({ headers: headers});
      let url = 'http://acmaster.simplysaid.in/api/setupdetail/getSubtopicByTopic/'+topicId;
      return this.http.get(url, opts ).map((response: Response) => response.json(), err => console.log(err));
  }

  getQType()
  {
    let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions({ headers: headers});
      let url = 'http://acmaster.simplysaid.in/api/setupdetail/getQuestionTypeData';
      return this.http.get(url, opts ).map((response: Response) => response.json(), err => console.log(err));

  }

  getQuestionSubtypeDataByQuestiontype(qId:any)
  {

    let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions({ headers: headers});
      let url = 'http://acmaster.simplysaid.in/api/setupdetail/getQuestionSubtypeDataByQuestiontype/'+qId;
      return this.http.get(url, opts ).map((response: Response) => response.json(), err => console.log(err));
  }

  getSkillData()
  {
    let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions({ headers: headers});
      let url = 'http://acmaster.simplysaid.in/api/setupdetail/getSkillData';
      return this.http.get(url, opts ).map((response: Response) => response.json(), err => console.log(err));
  }

  getAllDifficulties()
  {
    let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions({ headers: headers});
      let url = 'http://acmaster.simplysaid.in/api/setup/difficulties_level';
      return this.http.get(url, opts ).map((response: Response) => response.json(), err => console.log(err)); 
  }

  getQuestions(qTypeId:string, classId:string, qSubTypeId:string, subTopicId:string, subId:string, topId:string)
  {
    console.log(qTypeId+" "+classId+" "+qSubTypeId+" "+subTopicId+" "+subId+" "+topId)
    let st = "1";
    let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions({ headers: headers});
      let url = 'http://acmaster.simplysaid.in/api/question/getQuestion';
      return this.http.post(url,{ status: st, class_id:classId,qst_id:qSubTypeId,st_id:subTopicId,sub_id:subId,topic_id:topId}, opts ).map((response: Response) => response.json(), err => console.log(err));
  }

  getQuestionByQID(qTypeId:string, qId:string)
  {
    console.log(qTypeId+" "+qId);
    let st = "1";
    let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions({ headers: headers});
      let url = 'http://acmaster.simplysaid.in/api/question/getQuestion';
      return this.http.post(url,{qt_id:qTypeId,status:st, qus_id:qId}, opts ).map((response: Response) => response.json(), err => console.log(err));
  }

  getReviewQuestionByQID(qTypeId:string, qId:string)
  {
    console.log(qTypeId+" "+qId);
    let st = "0";
    let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions({ headers: headers});
      let url = 'http://acmaster.simplysaid.in/api/question/getQuestion';
      return this.http.post(url,{qt_id:qTypeId,status:st, qus_id:qId}, opts ).map((response: Response) => response.json(), err => console.log(err));
  }

  getReviewQuestions(qTypeId:string, classId:string, qSubTypeId:string, subTopicId:string, subId:string, topId:string)
  {
    console.log(qTypeId+" "+classId+" "+qSubTypeId+" "+subTopicId+" "+subId+" "+topId)
    let st = "0";
    let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions({ headers: headers});
      let url = 'http://acmaster.simplysaid.in/api/question/getQuestion';
      return this.http.post(url,{ status: st, class_id:classId,qst_id:qSubTypeId,st_id:subTopicId,sub_id:subId,topic_id:topId}, opts ).map((response: Response) => response.json(), err => console.log(err));
  }

  generateExcelFile( board_id, class_id, sub_id, topic_id, st_id, qt_id, qst_id, skill_id, dl_id)
  {
    let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions({ headers: headers});
      let url = 'http://acmaster.simplysaid.in/api/question/downloadExcelFile';
      return this.http.post(url,
                              { board_id: board_id, class_id: "5",
                                sub_id: sub_id,
                                topic_id: topic_id,
                                st_id: st_id,
                                qt_id: qt_id,
                                qst_id: qst_id,
                                skill_id: skill_id,
                                dl_id: dl_id, 
                              }, opts ).map((response: Response) => console.log(response.json()), err => console.log(err));
  }

  addSubjectiveQuestions(qBoardId:string,
    qClassId:string,
    qSubId:string, 
    qTopicId:string,
    qSubtypeId:string,
    qTypeId:string,
    qSubTypeId:string,
    qSkillId:string,
    qDlId:string,
    qMarks:string,
    qNegMarks:string,
    qTimeAlloted:string,
    qRef:string,
    qName:string,
    qExplaination:string,
    answer,
    qopt_answer:string)
    {
      let headers = new Headers();
      headers.append('Prefix','inuat');
      headers.append('LoginId','1001');
      let opts = new RequestOptions({ headers: headers});
      let url = 'http://acmaster.simplysaid.in/api/question/addQuestion';
      return this.http.post(url, { 
        qus_board_id:qBoardId,
        qus_class_id:qClassId,
        qus_sub_id:qSubId, 
        qus_topic_id:qTopicId,
        qus_st_id:qSubTypeId,
        qus_qt_id:qTypeId,
        qus_qst_id:qSubtypeId,
        qus_skill_id:qSkillId,
        qus_dl_id:qDlId,
        qus_marks:qMarks,
        qus_negative_marks:qNegMarks,
        qus_time_alloted:qTimeAlloted,
        qus_historical_reference:qRef,
        qus_name:qName,
        qus_explanation:qExplaination,
        answer:answer,
        qopt_answer:qopt_answer}, opts ).map((response: Response) => response.json(), err => console.log(err));
    }
}
