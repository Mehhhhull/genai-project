const mongoose = require("mongoose");

/**
 * - Job Description: String
 * - Resume Text: String
 * - Self Description: String
 *
 * - Match Score: Number
 *
 * - Technical Questions: [
 *   {
 *     question: "",
 *     intension: "",
 *     answer: ""
 *   }
 * ]
 *
 * - Behavior Question: [
 *   {
 *     question: "",
 *     intension: "",
 *     answer: ""
 *   }
 * ]
 *
 * - Skills Gap: [
 *   {
 *     skill: "",
 *     severity: {
 *       type: String,
 *       Enum: ["low", "medium", "high"]
 *     }
 *   }
 * ]
 *
 * - Preparation Plan: [
 *   {
 *     day: Number,
 *     focus: String,
 *     task: [String]
 *   }
 * ]
 */

//sub schemas
const technicalQuestionSchema=new mongoose.Schema({
  question:{
    type:String,
    required:[true,"Question is required!"]
  },
  intension:{
    type:String,
    required:[true,"Intension is required!"]
  },
  answer:{
    type:String,
    required:[true,"Answer is required!"]
  }
},{
  _id:false
});

const behavioralQuestionSchema=new mongoose.Schema({
  question:{
    type:String,
    required:[true,"Question is required!"]
  },
  intension:{
    type:String,
    required:[true,"Intension is required!"]
  },
  answer:{
    type:String,
    required:[true,"Answer is required!"]
  }
},{
  _id:false
})

const skillsGapSchema=new mongoose.Schema({
  skill:{
    type:String,
    required:[true,"Skill is required!"]
  },
  severity:{
    type:String,
    enum:["low","medium","high"],
    required:[true,"Severity is required!"]
  }
},{
  _id:false
})

const preparationPlanSchema=new mongoose.Schema({
  day:{
    type:Number,
    required:[true,"Day is required!"]
  },
  focus:{
    type:String,
    required:[true,"Focus is required!"]
  },
  task:[String]
},{
  _id:false
})


//main Schema
const interviewReportSchema=new mongoose.Schema({
  jobDescription:{
    type:String,
    required:[true,"Job Description is required!"]
  },
  resume:{
    type:String,
  },
  selfDescription:{
    type:String,
  },
  matchScore:{
    type:Number,
    min:0,
    max:100
  },
  technicalQuestions:[technicalQuestionSchema],
  behavioralQuestions:[behavioralQuestionSchema],
  skillsGap:[skillsGapSchema],
  preparationPlan:[preparationPlanSchema],
  user:{
    
  }
},{
  timestamps:true
})


const interviewReportModel=mongoose.model("InterviewReport",interviewReportSchema);

module.exports=interviewReportModel;