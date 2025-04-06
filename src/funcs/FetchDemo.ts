import axios from "axios";

export default class FetchDemo {


    public async FetchHelloWorld (
        callback: (data: any) => void
    ) {
        try {

            // ローカルサーバ接続確認 OK
            const url1 = "http://localhost:1337/api/t-hoges";
            // Lambda接続確認（テンプレートでCors設定していないため不可）
            const url2 = "https://gm26dtewgesnis7g3g3vlebeim0pcdyxx.lambda-url.ap-southeast-1.on.aws/";
            // Lambda接続確認（テンプレートでCors設定しているため可）
            const url3 = "https://c76nh5rn6yslmeentdsoqk3gsy0btqqtt.lambda-url.ap-southeast-1.on.aws/";
            const response = await axios.get(url3, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                //body: JSON.stringify(user)
            });

            const data = response.data;

            if (callback != null) {
                callback(data);
            }
        } catch (e) {
            alert(`ERR: ${e}`);
        }
    }
}