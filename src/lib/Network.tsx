import axios from 'axios';
type NetworkSuccessCallBack = (message: string) => void;
type NetworkFailureCallBack = (message: string) => void;

const  NetworkCall =  async (path: string , data: Object ,successfun : NetworkSuccessCallBack  )=> {

    try {
        const response = await axios.post('https://example.com/'+path, data); // Replace with your API endpoint
        successfun('Data submitted successfully!');
        console.log(response.data); // Handle the response as needed
      } catch (err: any) {
        successfun(err.response?.data?.message || 'An error occurred while submitting the form.');
      };

}


export default NetworkCall