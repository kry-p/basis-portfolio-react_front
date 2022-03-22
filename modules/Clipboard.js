/* eslint-disable no-alert */
const copyResult = (output) => {
  if (!document.queryCommandSupported('copy')) {
    alert('복사를 지원하지 않는 브라우저입니다.');
  }

  const result = document.createElement('textarea');
  result.value = output;
  result.style.top = 0;
  result.style.left = 0;
  result.style.position = 'fixed';

  document.body.appendChild(result);
  result.focus();
  result.select();
  document.execCommand('copy');
  // 알림 띄우기
  alert('클립보드에 복사되었습니다.');
};

export default copyResult;
