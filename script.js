// Google Drive API Configuration
const GOOGLE_DRIVE_API_KEY = 'AIzaSyDquHn-z7uswpJBqfkJJoxzkbD_GjOKXhY'; // Replace with your API key
const FOLDER_ID = 'https://drive.google.com/drive/folders/1cb-AYMRox21UVFJVscJ2FQ-Swcfewvck'; // Replace with your folder ID

// Sample data for demonstration (replace with actual Google Drive API calls)
const sampleVideos = [
    {
        id: '1',
        title: 'Pantum Printer Setup Guide',
        description: 'Complete setup guide for Pantum printers',
        thumbnail: 'https://via.placeholder.com/300x200/667eea/ffffff?text=Setup+Guide',
        videoUrl: 'https://www.youtube.com/embed/UFq2NjgM74k?si=WeD1e3ZymV1rmc0D',
        duration: '5:30',
        type: 'video'
    },
    {
        id: '2',
        title: 'Driver Installation Tutorial',
        description: 'Step-by-step driver installation process',
        thumbnail: 'https://via.placeholder.com/300x200/764ba2/ffffff?text=Driver+Install',
        videoUrl: 'https://www.youtube.com/embed/UFq2NjgM74k?si=WeD1e3ZymV1rmc0D',
        duration: '2:23',
        type: 'video'
    },
    {
        id: '3',
        title: 'Troubleshooting Common Issues',
        description: 'Solutions for common printer problems',
        thumbnail: 'https://via.placeholder.com/300x200/27ae60/ffffff?text=Troubleshooting',
        videoUrl: 'https://www.youtube.com/embed/UFq2NjgM74k?si=WeD1e3ZymV1rmc0D',
        duration: '12:20',
        type: 'video'
    }
];

const sampleDocuments = [
    {
        id: '1',
        title: 'Pantum P2500W User Manual',
        description: 'Complete user manual for Pantum P2500W printer',
        thumbnail: 'https://via.placeholder.com/300x200/e74c3c/ffffff?text=User+Manual',
        pdfUrl: 'https://drive.google.com/file/d/1PuIq4i6nRxkxo43alzqV6pHfrWS7ee6T/view?usp=sharing',
        fileSize: '2.5 MB',
        type: 'pdf'
    },
    {
        id: '2',
        title: 'Driver Download Guide',
        description: 'Comprehensive guide for downloading and installing drivers',
        thumbnail: 'https://via.placeholder.com/300x200/f39c12/ffffff?text=Driver+Guide',
        pdfUrl: 'https://drive.google.com/file/d/YOUR_PDF_ID/preview',
        fileSize: '1.8 MB',
        type: 'pdf'
    },
    {
        id: '3',
        title: 'Maintenance Schedule',
        description: 'Recommended maintenance schedule for optimal performance',
        thumbnail: 'https://via.placeholder.com/300x200/3498db/ffffff?text=Maintenance',
        pdfUrl: 'https://drive.google.com/file/d/YOUR_PDF_ID/preview',
        fileSize: '950 KB',
        type: 'pdf'
    }
];

// DOM Elements
const modal = document.getElementById('content-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');
const videosGrid = document.getElementById('videos-grid');
const documentsGrid = document.getElementById('documents-grid');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load sample content
    loadVideos();
    loadDocuments();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup smooth scrolling for navigation
    setupSmoothScrolling();
}

function setupEventListeners() {
    // Modal close functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    } else {
        console.warn('Close button not found!');
    }
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Navigation active state
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function setupSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Load Google Drive content (placeholder function)
function loadGoogleDriveContent() {
    // This function would integrate with Google Drive API
    // For now, we'll show a notification
    showNotification('Loading content from Google Drive...', 'info');
    
    // Simulate API call delay
    setTimeout(() => {
        showNotification('Content loaded successfully!', 'success');
        loadVideos();
        loadDocuments();
    }, 2000);
}

function loadVideos() {
    videosGrid.innerHTML = '';
    
    sampleVideos.forEach(video => {
        const videoCard = createVideoCard(video);
        videosGrid.appendChild(videoCard);
    });
}

function loadDocuments() {
    documentsGrid.innerHTML = '';
    
    sampleDocuments.forEach(document => {
        const documentCard = createDocumentCard(document);
        documentsGrid.appendChild(documentCard);
    });
}

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'content-card';
    card.innerHTML = `
        <div class="file-icon">
            <i class="fas fa-video"></i>
        </div>
        <h4>${video.title}</h4>
        <p>${video.description}</p>
        <div class="file-info">
            <span><i class="fas fa-clock"></i> ${video.duration}</span>
            <span><i class="fas fa-play"></i> Watch</span>
        </div>
    `;
    
    card.addEventListener('click', () => openVideo(video));
    return card;
}

function createDocumentCard(document) {
    const card = document.createElement('div');
    card.className = 'content-card';
    card.innerHTML = `
        <div class="file-icon">
            <i class="fas fa-file-pdf"></i>
        </div>
        <h4>${document.title}</h4>
        <p>${document.description}</p>
        <div class="file-info">
            <span><i class="fas fa-file"></i> ${document.fileSize}</span>
            <span><i class="fas fa-download"></i> View</span>
        </div>
    `;
    
    card.addEventListener('click', () => openDocument(document));
    return card;
}

function openVideo(video) {
    modalBody.innerHTML = `
        <h3>${video.title}</h3>
        <p>${video.description}</p>
        <div class="video-container">
            <iframe src="${video.videoUrl}" 
                    frameborder="0" 
                    allowfullscreen>
            </iframe>
        </div>
    `;
    openModal();
}

function openDocument(document) {
    modalBody.innerHTML = `
        <h3>${document.title}</h3>
        <p>${document.description}</p>
        <div class="pdf-container">
            <iframe src="${document.pdfUrl}" 
                    frameborder="0">
            </iframe>
        </div>
    `;
    openModal();
}

function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    // Always re-attach close event
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Google Drive API Integration (placeholder functions)
async function loadGoogleDriveVideos() {
    try {
        // This would make actual API calls to Google Drive
        const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'video/'&key=${GOOGLE_DRIVE_API_KEY}`);
        const data = await response.json();
        
        // Process and display videos
        return data.files;
    } catch (error) {
        console.error('Error loading videos:', error);
        showNotification('Error loading videos from Google Drive', 'error');
    }
}

async function loadGoogleDriveDocuments() {
    try {
        // This would make actual API calls to Google Drive
        const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'application/pdf'&key=${GOOGLE_DRIVE_API_KEY}`);
        const data = await response.json();
        
        // Process and display documents
        return data.files;
    } catch (error) {
        console.error('Error loading documents:', error);
        showNotification('Error loading documents from Google Drive', 'error');
    }
}

// Search functionality
function setupSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search videos and documents...';
    searchInput.className = 'search-input';
    
    // Add search input to header
    const nav = document.querySelector('.nav');
    nav.appendChild(searchInput);
    
    // Add search styles
    const searchStyles = document.createElement('style');
    searchStyles.textContent = `
        .search-input {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 25px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            outline: none;
            transition: all 0.3s ease;
        }
        
        .search-input::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }
        
        .search-input:focus {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.05);
        }
    `;
    document.head.appendChild(searchStyles);
}

// Initialize search when page loads
document.addEventListener('DOMContentLoaded', setupSearch);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close modal
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Performance optimization - lazy loading
function setupLazyLoading() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    });
    
    // Observe content cards
    document.querySelectorAll('.content-card').forEach(card => {
        observer.observe(card);
    });
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', setupLazyLoading); 