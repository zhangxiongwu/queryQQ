import React,{useState,useEffect,useContext} from 'react'
import './index.scss'

const Index = (propsObj)=>{
    const [state,setState] = useState({
        test: ''
    })
    
    //更新state
    /*
    const updateState = (newState,callback)=>{
        let data = JSON.parse(JSON.stringify(state))
        setState(Object.assign({},data,newState))
    }
    // 监听
    useEffect(()=>{
    },[])
    */

    // 获取列表
    /*
    const getCourseList = (data)=>{
        let postData = Object.assign({},state.searchParams,data)
        api.getCourseList(postData,res=>{
            updateState({
                searchParams:data,
                courseList:res.recordList,
                courseTotal:res.totalCount
            })
        })
    }
    */

    return <div className="index-page">
        <div className="test">index-page</div>
    </div>
}
export default Index