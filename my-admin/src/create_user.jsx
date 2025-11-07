import {
    CreateBase,
    Login,
    LoginForm,
    SimpleForm,
    TextInput,
    useNotify,
    useRedirect,
} from "react-admin";
import { Argon2id } from "./argon2id";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, CardContent, Dialog, Link } from "@mui/material";

export const CreateUser = () => {
    const redirect = useRedirect();
    const notify = useNotify();

    const onError = async (error) => {
        // Users are created with a trigger that deletes the transition record,
        // so a 404 actually implies that the user is created successfully.
        if (error.status == 404) {
            notify("User Created Successfully", { type: "success" });
            redirect("/login");
        } else {
            notify("Could Not Create User", { type: "error" });
        }
    };

    const transform = async (data) => ({
        ...data,
        // Doing this clience side is not good practice, but is a suitable
        // workaround for study purposes and Trailbase limitations.
        password: await Argon2id.hashEncoded(data.password),
    });

    return (
        <Dialog open>
            <Box sx={{ width: 300, p: 2 }}>
                <CreateBase
                    resource="temp_user"
                    mutationOptions={{ onError }}
                    transform={transform}
                    disableAuthentication
                >
                    <SimpleForm>
                        <TextInput source="email" />
                        <TextInput source="password" />
                    </SimpleForm>
                </CreateBase>
            </Box>
        </Dialog>
    );
};

export const LoginPage = () => (
    <Login>
        <LoginForm />
        <CardContent>
            <Button
                variant="outlined"
                color="secondary"
                size="small"
                fullWidth
                component={RouterLink}
                to="/create-user"
            >
                Create New User
            </Button>
        </CardContent>
    </Login>
);
