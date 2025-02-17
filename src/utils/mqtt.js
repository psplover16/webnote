import mqtt from "mqtt";
let mqttClient;

const connectMQTT = (func,subTopic=[], brokerUrl = "wss://broker.mqttgo.io:8084/mqtt") => {
    return new Promise((resolve, reject) => {
      try {
        // const brokerUrl = "wss://broker.mqttgo.io:8084/mqtt"; // 替換為 mqttgo.io 的地址
        mqttClient = mqtt.connect(brokerUrl);
  
        mqttClient.on('connect', () => {
            subTopic.forEach((v)=>{
                mqttClient.subscribe(v);
            })
            console.log('成功')
          resolve(mqttClient);
        });
  
        mqttClient.on('message', (topic, message) => {
          func({ topic, message }); // 在收到消息後，可以進行相應的處理
        });
      } catch (err) {
        reject(err);
      }
    });
  };


const pubData = (topic,pubMsg) => {
  mqttClient.publish(topic, pubMsg);
}

 

export { connectMQTT, pubData }