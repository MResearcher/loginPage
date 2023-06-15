<script>
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    // 阻止表单的默认提交行为
    event.preventDefault();

    // 获取用户名和密码
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 这里进行基础的验证
    if(username === 'admin' && password === 'password') {
      alert('登录成功！');
    } else {
      alert('用户名或密码错误！');
    }
  });
</script>
