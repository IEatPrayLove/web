import {useEffect, useState} from "react";
import {ErrorBoundary} from '@/components'
import {getUserInfo} from "../../../server/api";

interface userInfo {
    id: number;
    name: string;
    sex: string;
    phone: number;
    status: "1" | "2";
    create_time: string;
    address: string;
    age: number;
}

const Mine = () => {
    const [info, setInfo] = useState<userInfo[]>([])
    const init = async () => {
        const res = await getUserInfo()
        setInfo(res.data.dataList)
    }
    useEffect(() => {
        void init()
    }, [])
    return (
        <ErrorBoundary fallback={<div>捕获到错误</div>}>
            <div onClick={
                () => {
                    if (true) {
                        throw new Error('出错了')
                    }
                }}>mine
            </div>
            <div>
                {
                    info.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <div>{item.name}</div>
                                <div>{item.age}</div>
                            </div>
                        )
                    })
                }
            </div>
        </ErrorBoundary>
    )
}
export default Mine;