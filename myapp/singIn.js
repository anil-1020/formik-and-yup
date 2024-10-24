import { Formik } from "formik";
import { TextInput, TouchableOpacity,Text,StyleSheet } from "react-native";
import * as Yup from "yup"


""
export const SingIn =() =>(

<Formik
validationSchema={validation}
onSubmit={ (values ,{resetForm})=>{
    console.log(values);
resetForm();
}  }
initialValues={{
    email:"",
    password:""
}}
>
{({handleSubmit,handleChange,values,errors,handleBlur,touched})=> (
<>
<TextInput 
  style={styles.input_1}
  onTouchStart={handleBlur("email")}
  onChangeText={handleChange("email")}
  value={values.email}
  placeholder="email"
  inputMode="email"/>
{ touched.email && errors.email ? <Error messae={errors.email}/> : null}
<TextInput 
   style={styles.input_1}
   onTouchStart={handleBlur("password")}
   onChangeText={handleChange("password")}
   value={values.password} 
   placeholder="password"  
   secureTextEntry/>
{touched.password && errors.password ? <Error messae={errors.password}/> : null}

<TouchableOpacity style={styles.touch_contair} onPress={()=> handleSubmit()}>
    <Text style={{fontSize:24,fontWeight:"bold"}}>SEND</Text>
</TouchableOpacity>
</>
)}


</Formik>

)


const Error=({messae}) => <Text style={{color:`red`}}>{messae}</Text>

const validation = Yup.object().shape({

    email:Yup.string().email(`this format is not avaible`).required(`this area is necessary`),
    password:Yup.string().min(6 , `password too short`) .required(`this area is necessary to`)
})

const styles = StyleSheet.create({

touch_contair:{
    width:300, 
    height:50,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:`#00E5FA` ,
    borderRadius:24,
    marginTop:24

},
input_1:{
    backgroundColor:`#eaeaea`,
    width:300,
    height:50,
    borderRadius:25,
    paddingLeft:120,
    marginBottom:5

}


})