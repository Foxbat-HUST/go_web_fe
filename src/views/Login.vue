<template>
    <main>
        <b-container fluid="sm">
            <b-row>
                <b-col sm="4">
                    <Intro />
                </b-col>
                <b-col>
                    <v-card elevation="18" color="#B2E0DF" outlined>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col>
                                        user name:
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="email" />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        password:
                                    </v-col>
                                    <v-col>
                                        <v-text-field type="password" v-model="password"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn rounded color="primary" dark :onclick="submit">
                                Login
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </b-col>
            </b-row>
        </b-container>
    </main>
</template>
<script lang="ts" setup >
import Intro from '@/components/home/Intro.vue'
import {ref} from 'vue'
const email = ref<string>("")
const password = ref<string>("")
const submit = () => {
    console.log(email.value)
    console.log(password.value)
}
</script>