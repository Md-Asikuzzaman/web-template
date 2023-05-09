const textInfo={
  default:'text-default',
  success:'text-success',
  info:'text-info',
  failed:'text-danger'
};

async function appendLog(text,info){
  const text__log = document.querySelector('.tools__info');
    var log = `<span class="mb-0 ${info}">${text}</span>`;
  if (text.includes("\n")) {
    log += "</br>"
  }
  text__log.innerHTML += log;  
}

async function readInfo(){
  const d = new Date();
  let time = d.getTime();

  await appendLog("Sending Request to Server...",textInfo.default);
  await appendLog("OK\n",textInfo.success);

  await operationFinishedInfo('operation Finished',time,23423452)
}


async function operationFinishedInfo(text,time,work_id){      
  const text__log = document.querySelector('.tools__info');
  const log=`<div class="mt-4">
    <p class="mb-0">${text}</p>
    <p class="mb-0">
      <b>Total Time:</b> ${time}
    </p>
    <p class="mb-0">Operation/Work ID: ${work_id}</p>
  </div>`;
  text__log.innerHTML+=log;
}
