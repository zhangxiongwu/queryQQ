import React,{useState,useEffect,useContext} from 'react'

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
        index-page
    </div>
}
export default Index