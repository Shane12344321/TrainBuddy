import re

with open('scripts/app.js', 'r') as f:
    content = f.read()

# 1. Remove IIFE wrapper and add imports
content = re.sub(r'\(function \(\) \{\n    \'use strict\';', 
'''import { auth, db, googleProvider } from './firebase-config.js';
import { signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { doc, getDoc, setDoc, collection, query, where, onSnapshot, updateDoc, arrayUnion, arrayRemove, getDocs } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Global user state
let currentUser = null;''', content)

content = re.sub(r'}\)\(\);\s*$', '', content)

# 2. Storage keys and old user session
content = re.sub(r'// ===== STORAGE KEYS =====.*?// ===== DOM REFS =====', '// ===== DOM REFS =====', content, flags=re.DOTALL)

with open('scripts/app.js', 'w') as f:
    f.write(content)
