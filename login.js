function showRegisterTab() {
    const modals = document.getElementById('modals');
    if (modals) {
        const register = document.createElement('div');
        register.classList.add('modal');
        register.style.animation=`fadeIn linear 0.5s`;
        register.innerHTML=`
            <div class="modal__overlay"></div>
            <div class="modal__body">
            <div class="auth__farm">                
            <div class="auth__form">
                <div class="auth__form__login">
                    <h3 class="login-header">Đăng Ký</h3>
                </div>                    
                <div class="auth__form__login-form">
                    <div class="login-form-group">
                        <input type="text" class="login-form-input" placeholder="Số điện thoại">                        
                    </div>                        
                </div>
                <div class="auth__form__control">
                    <button class="btn btn--primary btn-license">TIẾP THEO</button>
                </div>                    
                <div class="auth__form--or">                    
                    <div class="auth__form--orline-text"></div>
                    <span class="auth__form--ortext">HOẶC</span>
                    <div class="auth__form--orline-text"></div>
                </div>
                <div class="auth__form--sosials">
                    <button class="btn btn--with--icon fb"><i class="fab fa-facebook"></i> Facebook</button>
                    <button class="btn btn--with--icon gg"><i class="fab fa-google"></i> Google</button>
                    <button class="btn btn--with--icon ip"><i class="fab fa-apple"></i> Apple</button>
                </div>
                <div class="auth__form--license">
                    <h5>Bằng việc đăng kí, bạn đã đồng ý với Shopee về</h5>
                    <h5><a href="" class="license--link">Điều khoản dịch vụ </a>& <a href="" class="license--link">Chính sách bảo mật</a></h5>
                </div>
                <div class="auth__form--newbie">
                    <span>Bạn đã có tài khoản?<button class="license--link login-tab"> Đăng nhập</button></span>
                </div>
            </div>
        </div>
        `
        modals.appendChild(register);
        register.onclick = function(e) {
            if (e.target.closest('.modal__overlay')) {
                modals.removeChild(register)
            }
            else if (e.target.closest('.login-tab')) {
                modals.removeChild(register);
                showLoginTab();
            }
        }        
    }
}

function showLoginTab(){
    const modals = document.getElementById('modals');
    if (modals) {
        const login = document.createElement('div');
        login.classList.add('modal');
        login.style.animation=`fadeIn linear 0.5s`;
        login.innerHTML= `
        <div class="modal__overlay"></div>
        <div class="modal__body">
            <div class="auth__farm">                
                <div class="auth__form">
                    <div class="auth__form__login">
                        <h3 class="login-header">Đăng Nhập</h3>
                    </div>                    
                    <div class="auth__form__login-form">
                        <div class="login-form-group">
                            <input type="text" class="login-form-input" placeholder="Email/Số điện thoại/Tên đăng nhập">                        
                        </div>
                        <div class="login-form-group">
                            <input type="password" class="login-form-input" placeholder="Mật khẩu">                        
                        </div>
                    </div>
                    <div class="auth__form__control">
                        <button class="btn btn--primary">ĐĂNG NHẬP</button>
                    </div>
                    <div class="auth__form--other">
                        <a href="">Quên mật khẩu</a>
                        <a href="">Đăng nhập với SMS</a>
                    </div>
                    <div class="auth__form--or">                    
                        <div class="auth__form--orline-text"></div>
                        <span class="auth__form--ortext">HOẶC</span>
                        <div class="auth__form--orline-text"></div>
                    </div>
                    <div class="auth__form--sosials">
                        <button class="btn btn--with--icon fb"><i class="fab fa-facebook"></i> Facebook</button>
                        <button class="btn btn--with--icon gg"><i class="fab fa-google"></i> Google</button>
                        <button class="btn btn--with--icon ip"><i class="fab fa-apple"></i> Apple</button>
                    </div>
                    <div class="auth__form--newbie">
                        <span>Bạn mới biết đến Shopee?<button class="register register-tab">Đăng ký</button></span>
                    </div>
                </div>
            </div>
        `
        modals.appendChild(login);        
        const modalBody = login.querySelector('modal__body');
        // if (modalBody) {
        // modalBody.style.animation=`growth linear 0.5s`;}
        login.onclick = function(e) {
            if (e.target.closest('.modal__overlay')) {
                modals.removeChild(login)
            }
            else if (e.target.closest('.register-tab')) 
            {
                modals.removeChild(login);
                showRegisterTab();
            }
        }        
    }
}