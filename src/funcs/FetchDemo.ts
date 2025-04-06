import axios from "axios";
import env from "../env/env";

export default class FetchDemo {

    public async FetchHelloWorld (
        callback: (data: any) => void
    ) {
        try {
            const response = await axios.get(env.URL__LAMBDA_TEST_2, {
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