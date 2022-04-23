<template>
  <div
    class="contact"
    :class="{ 'contact-detail': detail }"
    @click="showDetails()"
  >
    <div class="contact-img">
      <img :src="url" alt="profile" />
    </div>
    <div class="contact-body">
      <div class="name-contact">
        <span>{{ name }}</span>
      </div>
      <div class="email-contact">
        <span>{{ email }}</span>
      </div>
    </div>
    <div class="footer-last-container">
      <span>{{ contact }}</span>
    </div>
    <div class="contact-options" v-if="hasOptions" @click="handleOptions()">
      <v-icon>mdi-dots-horizontal</v-icon>
      <div class="toggle" :class="[showOptions ? 'active' : '']">
        <span @click="handleEdit()">Edit</span>
        <span @click="handleDelete()">Delete</span>
      </div>
    </div>
    <v-dialog
      v-model="editContactDialog"
      persistent
      max-width="600px"
      class="dialog"
    >
      <v-card color="#222330">
        <v-card-title>
          <span class="text-h5">{{ $t("ContactCard.editContact") }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="componentName"
                  dark
                  color="#d7d7e3"
                  :label="$t('contactPage.name')"
                  minLenght="5"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="componentEmail"
                  dark
                  color="#d7d7e3"
                  :label="$t('contactPage.email')"
                  type="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="componentContact"
                  dark
                  color="#d7d7e3"
                  :label="$t('contactPage.contact')"
                  maxLength="9"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="componentUrl"
                  dark
                  color="#d7d7e3"
                  :label="$t('contactPage.url')"
                  type="email"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="editContactDialog = false">
            {{ $t("contactPage.buttonCloseDialog") }}
          </v-btn>
          <v-btn text @click="editContact()">
            {{ $t("contactPage.buttonSaveDialog") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="deleteContactDialog" max-width="290" class="dialog">
      <v-card color="#222330">
        <v-card-title class="text-h5">
          {{ $t("ContactCard.questionDelete") }}
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="deleteContactDialog = false">
            {{ $t("ContactCard.deleteButton1") }}
          </v-btn>

          <v-btn text @click="deleteContact()">
            {{ $t("ContactCard.deleteButton2") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    hasOptions: {
      type: Boolean,
      default: false,
    },
    id: {
      type: Number,
      required: true,
    },
    detail: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showOptions: false,
      editContactDialog: false,
      deleteContactDialog: false,
      componentName: "",
      componentEmail: "",
      componentContact: "",
      componentUrl: "",
      contacts: [],
    };
  },
  mounted() {
    if (localStorage.getItem("contacts")) {
      this.contacts = JSON.parse(localStorage.getItem("contacts"));
    }
    this.componentName = this.name;
    this.componentEmail = this.email;
    this.componentContact = this.contact;
    this.componentUrl = this.url;
  },
  methods: {
    handleOptions() {
      this.showOptions = !this.showOptions;
    },
    handleEdit() {
      this.editContactDialog = !this.editContactDialog;
    },
    handleDelete() {
      this.deleteContactDialog = !this.deleteContactDialog;
    },
    editContact() {
      let array = this.contacts;
      array[this.id] = {
        name: this.componentName,
        email: this.componentEmail,
        url: this.componentUrl,
        contact: this.componentContact,
      };

      const contacts = JSON.stringify(array);
      localStorage.setItem("contacts", contacts);
      this.contacts = array;
      this.editContactDialog = false;
      this.$emit("changeContact");
    },
    deleteContact() {
      let array = this.contacts;
      array = array.filter((item, index) => index !== this.id);
      const contacts = JSON.stringify(array);
      localStorage.setItem("contacts", contacts);
      this.$emit("changeContact");
      this.deleteContactDialog = false;
    },
    showDetails() {
      if (this.detail) {
        this.$router.push(`/${this.id}`);
      }
    },
  },
  watch: {
    contacts(newContacts) {
      this.contacts = newContacts;
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />
