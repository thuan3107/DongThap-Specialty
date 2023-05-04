<template>
	<div class="col-md-12">
		<div class="card card-container container" >
			<!-- <img
				id="profile-img"
				src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
				alt="Cannot load the image"
				class="profile-img-card"
			/> -->
       
			<Form @submit="handleLogin" :validation-schema="loginFormSchema">
			      <h1 id="Login" style="color: #008848">Login</h1>
           
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
      	<div class="form-group">
					<!-- <label for="username">Tên đăng nhập</label> -->
					<Field name="username" type="text" class="form-control" placeholder="Tài khoản" />
					<ErrorMessage name="username" class="error-feedback" />
				</div>
        
				<div class="form-group">
					<!-- <label for="password">Mật khẩu</label> -->
					<Field
						name="password"
						type="password"
						class="form-control"
            placeholder="Mật khẩu"
					/>
					<ErrorMessage name="password" class="error-feedback" />
				</div>

				<div class="form-group">
					<button
						class="btn btn-block"
						:disabled="loading"
					>
						<span
							v-show="loading"
							class="spinner-border spinner-border-sm"
						></span>
						<span >Đăng nhập</span>
					</button>
				</div>

				<div class="form-group">
					<div v-if="message" class="alert alert-danger" role="alert">
						{{ message }}
					</div>
				</div>
			</Form>
		</div>
     <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button class="ghost" id="signIn">Sign In</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 id="welcome">Welcome back!</h1>
              <p>Enter your personal details and start journey with us</p>
              <router-link to="/register"><button class="ghost" id="login">Signin</button></router-link>
            </div>
          </div>
        </div>
	</div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth.store";

export default {
	components: {
		Form,
		Field,
		ErrorMessage,
	},
	data() {
		const loginFormSchema = yup.object().shape({
			username: yup.string().required("Tên đăng nhập phải có giá trị."),
			password: yup.string().required("Mật khẩu phải có giá trị."),
		});

		return {
			loading: false,
			message: "",
			loginFormSchema,
		};
	},
	methods: {
		...mapActions(useAuthStore, ["login"]),

		async handleLogin(user) {
			this.loading = true;

			try {
				await this.login(user);

				const redirectPath = this.$route.query.redirect || {
					name: "profile",
				};

				this.$router.push(redirectPath);
			} catch (error) {
				console.log(error);

				this.loading = false;
				this.message = "Đã có lỗi xảy ra.";
			}
		},
	},
};
</script>

<style scoped>
@import "@/assets/form.css";

#Login {
 font-size: 30px;
  margin-bottom: 30px;
  color:#008848;
}

body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
}

h2 {
  text-align: center;
}
#welcome{
   color:white;
   font-size: 29px;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}
button.ghost:hover{
    opacity: 0.6;
}
a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}
.card-container.card{
   background:white;
   
}

button {
  border-radius: 20px;
  border: 1px solid #008848;
  background-color: #008848;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin-top: 10px;
}

button:active {
  transform: scale(0.95);
}
.col-md-12 {
    -ms-flex: 0 0 100%;
    flex: 0 10% 100%;
     width: 1200px;
     margin-right: 30px;
    margin-bottom:10px;
  
}
button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #FFFFFF;
}

Form {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
  width:310px;
  
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 300px;
  height: 38px;
}

.container {
  
  background-color: #fff;
  border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 380px;
} 

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }
  
  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 63.5%;
  width: 30%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container{
  transform: translateX(-100%);
}

.overlay {
  background: #008848;
  background: -webkit-linear-gradient(to right, #008848, #4c9ea7);
  background: linear-gradient(to right, #008848, #2ab2af);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 190%;
    transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 0px auto;
}

.social-container a {
  border: 1px solid #DDDDDD;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
span.error-feedback{
	color: red;

}

.btn.btn-block:hover {
    opacity: 0.6;
}


</style>
