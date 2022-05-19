import React,{useState,useEffect,useContext} from 'react'
import './index.scss'
import HelloWorld from '../../components/HelloWorld'
import api from '../../utils/api'

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
    */

    useEffect(()=>{
        searchQQApi()
    },[])

    const searchQQApi = async () => {
        let res = await api.fetch({
            url: 'https://center.mshiedu.com/center/sys/timestamp/get',
            data: JSON.stringify({
                a: 1
            })
        })
        console.log(' ==== res === ', res)
    }

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
        <HelloWorld></HelloWorld>
    </div>
}
export default Index