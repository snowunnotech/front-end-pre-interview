<template>
    <v-form>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-text-field
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
                        solo
                        name=""
                        label=""
                        value=""
                        flat
                    ></v-textarea>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form> 
</template>

<script>
export default {
    
}
</script>

<style>

</style>