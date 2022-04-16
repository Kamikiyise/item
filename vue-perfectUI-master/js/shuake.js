const https = require('https')
const query = require('querystring')
//查询字符串
const queryString = query.stringify({
  //课程ID
  clazzId: '33158405',
  //刷课时长
  playingTime: 540,
  //固定不变的值，作用不明
  duration: '3464',
  //固定不变的值，作用不明
  clipTime: '0_3464',
  //固定不变的加密字符串，估计是md5加密，作用不明
  objectId: '568c5a671b675a873ef5d3f64c165e06',
  //固定不变的加密字符串，作用不明
  otherInfo: 'nodeId_460548036-cpi_104115883',
  //固定不变的值，作用不明
  jobid: '1636964420854398',
  //用户ID
  userid: '114266757',
  //固定不变的值，取值一般为0，出现过一次2，作用不明
  isdrag: '0',
  //刷课的设备，一般为pc
  view: 'pc',
  //猜测是编码后的url通过md5加密后的结果，每次请求都会不一样
  enc: 'cc7e6f379b81eec0ff150b7f0ab9f359',
  //固定不变的值，作用不明
  rt: '0.9',
  //固定不变的值，作用不明,估计是代表刷新的类型吧，Video视频类型
  dtype: 'Video',
  //当前的时间戳，13位
  _t: '1636986887047',

})

//请求头参数，巴拉巴拉一大堆，照抄就完事
const headers = {
  "Accept": "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
  "Connection": "keep-alive",
  "Content-Type": "application/json",
  "Cookie": 'source=""; lv=4; fid=1820; _uid=114266757; uf=b2d2c93beefa90dc72c9ce902b9eb4f136871c7aa0803f075e2f356087e256d524b81486537b57a8848beda1dea63e80913b662843f1f4ad6d92e371d7fdf64470ba5508f77e5757ce71fc6e59483dd3246a8b8606f41f7b2f6a275887ea7ff46928866f43f412f5; _d=1636986495856; UID=114266757; vc=BC84911C584431D9C8083138C9B30BA1; vc2=AAC9FA260F9859DB6D137C08732CF322; vc3=KILHL%2BETiEClp02cYaLm2y7JaeGPVWh%2BPr9ypEC2vPUGe5ED7rTZ6crxUjhwCI8VMhQ%2BAvnCSNrNkFkueZ5GCr4AE%2ByY0ZGCBCMhAbRuEuJw2OVF9wswPNE1fy962c3vg2sUilJurbJIarhnapamr564Bq1LbD%2BtolPq2G9ZK8A%3D3704bd093ac0aa810feb05fe60c8010c; xxtenc=c8e5d91f637c7dfeeb7d2e6fae24ab9e; DSSTASH_LOG=C_38-UN_53-US_114266757-T_1636986495858; spaceFid=1820; spaceRoleId=""; k8s=405b16d0b4343aadd133bc76d875cb084dc8e2c2; jrose=66BC03A0E6D56DD2566144DFFB81E0B4.mooc-3230766634-9t70j; route=0eb899bb9bb390391b050e8cb1d78cb4; videojs_id=6681154',
  "Host": "mooc1.chaoxing.com",
  "Referer": "https://mooc1.chaoxing.com/ananas/modules/video/index.html?v=2021-1112-1720",
  "sec-ch-ua": '"Microsoft Edge";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/95.0.1020.44"
}

//发起https的GET请求
https.request({
  //请求方法
  method: 'GET',
  //请求地址
  host: 'mooc1.chaoxing.com',
  //请求路径
  path: '/multimedia/log/a/104115883/47b2846cf3a9035268fb06eede219c56?' + queryString,
  //请求头
  headers
}, res => {
  res.on('data', chunk => {
    //打印出请求结果
    console.log(chunk.toString())
  })
  res.on('end', () => {
    console.log('请求结束')
  })
}).end()
