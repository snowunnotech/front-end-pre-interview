<template>
    <v-form v-model="valid">
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-text-field
                        v-model="author"
                        label="Solo"
                        placeholder="Author"
                        solo
                        flat
                    ></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field
                        label="Solo"
                        placeholder="Created at"
                        solo
                        flat
                    ></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-textarea
                        v-model="description"
                        solo
                        name=""
                        label=""
                        placeholder="Description"
                        flat
                    ></v-textarea>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form> 
</template>

<script>
export default {
    data() {
        return {
            valid: true,
            author: '',
            authorRules: [
                //不能為空
            ],
            title: '',
            titleRules: [
                // 不能跟其他書名重複
            ],
            description: '',
            descriptionRules: [
                
            ] 
        }
    }
}
</script>

<style>

</style>